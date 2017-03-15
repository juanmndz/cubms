import React from 'react';
const HighScoresPlayers = ({players}) => {
  const style = {
  color: 'black'
};

  return (
    <div className="section-a">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <i className="fa fa-gear"></i>
            <h3>Recent Scores:</h3>

                {players && players.length > 0 ? (
                  <ul className="list-group">
                    {players.map((player, index) => {
                      return (
                        <li className="list-group-item" key={index}>
                          <span style={style}>{player.name}: </span>
                          <span style={style}><b>{player.score}</b></span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighScoresPlayers;
