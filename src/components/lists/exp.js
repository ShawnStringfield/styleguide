import React from 'react';

const WorkExperience = function() {
    return (
        <div>
            <h2 className="text-center">Working Experience</h2>
            <div className="experience">
                <div className="left">
                  <p className="company"><a href="http://aarp.org">AARP</a></p>
                  <p className="title">Front-end Developer</p>
                </div>

                <div className="right">
                  <p className="date text-muted">February 1, 2016 – Present</p>
                </div>
            </div>

            <div className="experience">
                <div className="left">
                  <p className="company"><a href="http://usnews.com">US News & World Report</a></p>
                  <p className="title">Front-end Developer</p>
                </div>

                <div className="right">
                  <p className="date text-muted">February 1, 2016 – Present</p>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;
