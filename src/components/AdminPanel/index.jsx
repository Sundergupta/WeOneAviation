import React, { useEffect, useState } from "react";
// import "./AdminPanel.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Login({ onLogin }) {
    const [token, setToken] = useState("");
    return (
        <div className="admin-login">
            <h3>Admin Login</h3>
            <input value={token} onChange={e => setToken(e.target.value)} placeholder="Enter admin token" />
            <button onClick={() => onLogin(token)}>Login</button>
        </div>
    );
}

export default function AdminPanel() {
    const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (t) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/forms`, {
                headers: { "x-admin-token": t }
            });
            if (!res.ok) {
                if (res.status === 401) throw new Error("Unauthorized");
                throw new Error("Failed to fetch");
            }
            const json = await res.json();
            setData(json);
        } catch (err) {
            alert(err.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) fetchData(token);
    }, [token]);

    const handleLogin = (t) => {
        localStorage.setItem("admin_token", t);
        setToken(t);
    };
    const logout = () => {
        localStorage.removeItem("admin_token");
        setToken("");
        setData([]);
    };

    if (!token) return <Login onLogin={handleLogin} />;

    return (
        <div className="admin-panel">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Form Submissions</h2>
                <div>
                    <button onClick={() => fetchData(token)}>Refresh</button>
                    <button onClick={logout} style={{ marginLeft: 8 }}>Logout</button>
                </div>
            </div>

            {loading ? <p>Loading...</p> : (
                <table className="admin-table">
                    <thead>
                        <tr><th>Name</th><th>Number</th><th>Message</th><th>Date</th></tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.number}</td>
                                <td style={{ whiteSpace: "pre-wrap" }}>{row.message}</td>
                                <td>{new Date(row.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <a href={`${API_URL}/download-excel`} style={{ display: "inline-block", marginTop: 12 }}>⬇ Download Excel</a>
        </div>
    );
}
