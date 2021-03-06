import React from 'react';
import getSocket from '../../socket';
import { useHistory } from 'react-router-dom';

import './style.css';


function Home() {

  const history = useHistory();

  async function createMeet() {
    console.log(':: createMeet ::');
    const { id } = await createRoom();
    history.push(`/meet/${id}`);
  }

  async function createRoom() {
    console.log(':: createRoom ::');
    const socket =  await getSocket();
    return fetch('http://localhost:4000/api/meet', {
      method: 'POST',
      body: JSON.stringify({ host: socket.id }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json());
  }

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body is-align-items-center align-center">
          <p className="title is-size-2 has-text-weight-medium">
            web-storm
          </p>
          <p className="subtitle has-text-weight-medium">
            Video conferencing prototype built with webRTC
          </p>
          <button className="button is-white" onClick={createMeet}> Start meet</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
