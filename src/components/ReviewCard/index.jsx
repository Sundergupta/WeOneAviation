// ReviewCard.js

import React from 'react';
import './style.css'; // Import the external CSS for this card

// FIX: Set a default value of [] for passedCourses
const ReviewCard = ({ name, imageSrc, passedCourses = [] }) => {
    return (
        <div className="review-card">
            {/* Assuming imageSrc is passed via props */}
            <div className="card-image-container">
                <img src={imageSrc} alt={`${name}'s photo`} className="card-image" />
            </div>

            <div className="passed-courses">
                {/* This line is now safe because passedCourses is guaranteed to be an array */}
                {passedCourses.map((course) => (
                    <span key={course} className="course-tag">
                        {course}
                    </span>
                ))}
            </div>

            {/* Placeholder for the badge icons below the course names */}
            <div className="badges-row">
                {/* This line is also safe, as .length on an empty array is 0 */}
                {[...Array(passedCourses.length)].map((_, index) => (
                    <span key={index} className="badge-icon">
                        ✅
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;