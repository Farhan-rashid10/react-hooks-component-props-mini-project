import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderReadTime = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups);
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoBoxes);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {renderReadTime(minutes)} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
