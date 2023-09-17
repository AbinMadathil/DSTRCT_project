import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseconfig';
import './App.css';

function NewsForm() {
  const [formData, setFormData] = useState({
    pid: '',
    name: '',
    Heading: '',
    Article: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'news'), formData);
      alert('Data successfully stored in the database!');
      setFormData({
        pid: '',
        name: '',
        Heading: '',
        Article: ''
      });
    } catch (error) {
      console.error('Error submitting data: ', error);
      alert('An error occurred while storing data in the database.');
    }
  };

  return (
    <div className="news-form">
      <h2>Submit News Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            PID:
            <input
              type="text"
              name="pid"
              value={formData.pid}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Heading:
            <input
              type="text"
              name="Heading"
              value={formData.Heading}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="article-section">
          <label>
            Article:
            <textarea
              name="Article"
              value={formData.Article}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewsForm;
