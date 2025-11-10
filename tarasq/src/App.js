import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="tarasq.png" alt="Logo asso" className="logo" />
        <a
          href="https://discord.gg/cNx5pesXUX"
          target="_blank"
          rel="noreferrer"
          className="discord-btn"
        >
          💬 Discord de Paroles Trans Reims
        </a>
      </header>

      <main className="main">
        <section className="intro">
          <h1>TARASQ</h1>
          <p>
            Nous sommes un collectif autogéré intégré au STRIP (Syndicat Trans
            des Injecteurices Précarisé-e-s) formé début 2023, par des personnes
            concernées et militantes.  
            <br />
            Notre but est d'offrir aux personnes concernées trans, enby, agenres
            ou en questionnement un espace de sociabilité en non-mixité, safe et
            sans jugement pour s'exprimer, se renseigner ou partager la
            compagnie d'autres personnes concernées.  
            <br />
            Nous proposons chaque dimanche une soirée accompagnée d'un atelier
            de réduction des risques pour les personnes trans dans leurs
            multitudes et dans le respect de leurs identités propres.
            <br />
            <br />
            Vous pouvez nous retrouver tous les dimanches à 18h pour notre
            rassemblement hebdomadaire ouvert à toutes les personnes trans,
            enby, agenres ou en questionnement si vous avez des questions sur
            votre parcours, votre identité, votre santé ou les moyens de
            s'hormoner, pour discuter ou partager à boire et à manger !
            <br />
            <br />
            Dans tous les cas, vous pouvez financer nos transitions ! Faites un
            don, cet argent nous permet de continuer nos activités de réduction
            des risques et de soutenir les personnes trans ou en questionnement
            de Reims et de ses alentours.
            <br />
            <br />
            Autonomie trans et adelphite !
          </p>
        </section>

        {/* Section Instagram */}
        <section className="instagram">
          <h2>Actualités & Actions</h2>
          <div className="iframe-container">
            <iframe
              src="https://www.instagram.com/collectiftarasq/embed"
              title="Instagram - Collectif Tarasq"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;