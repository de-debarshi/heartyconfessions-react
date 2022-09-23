export default function Home() {
    return (
      <div className="home-page">
        <div className="home-page__introduction-text">
          <p>Welcome to Hearty Confessions,</p>
          <p>a place where you can share your stories anonymously!</p>
        </div>
        <div>
          <a href="/submit" className="button-styled submit-stories-btn">Submit Your Stories</a>
        </div>
        <div>
          <a href="/explore" className="button-styled">Explore Stories</a>
        </div>
      </div>
    );
}