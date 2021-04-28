import React from 'react';
// import components...
import Tweet from './Tweet';

function Timeline(props) {
  const tweets = [
    {name: 'Andrew', tweet: 'React is super duper'},
    {name: 'Ed', tweet: 'Hello Hello'},
    {name: 'Dee', tweet: 'Learning to Code'}]
  return(
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
}

export default Timeline;