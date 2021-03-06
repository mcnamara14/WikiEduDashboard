import React from 'react';
import PropTypes from 'prop-types';

const CourseLevelSelector = ({ level, updateCourse }) => {
  const handleChange = (e) => {
    const courseLevel = e.target.value;
    updateCourse('level', courseLevel);
  };

  return (
    <div className="form-group">
      <label htmlFor="course_level">Course level:</label>
      <select
        id="course_level"
        name="course_level"
        value={level}
        onChange={handleChange}
      >
        <option disabled value=""> — select one —</option>
        <option value="Introductory">Introductory</option>
        <option value="Advanced Undergrad">Advanced undergraduate</option>
        <option value="Graduate">Graduate</option>
      </select>
    </div>
  );
};

CourseLevelSelector.propTypes = {
  level: PropTypes.string,
  updateCourse: PropTypes.func
};

export default CourseLevelSelector;
