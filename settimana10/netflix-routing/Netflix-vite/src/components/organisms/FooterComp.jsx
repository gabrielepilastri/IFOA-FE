function FooterComp() {
  return (
    <>
      <footer className="d-flex align-items-center mt-5">
        <ul className="list-unstyled text-secondary me-3">
          <li className="fs-6">
            <img
              height={22}
              className="me-3"
              src="src/assets/facebook.svg"
              alt="facebook"
            />
            <img
              height={22}
              className="me-3"
              src="src/assets/instagram.svg"
              alt="instagram"
            />
            <img
              height={22}
              className="me-3"
              src="src/assets/twitter.svg"
              alt="twitter"
            />
            <img
              height={22}
              className="me-3"
              src="src/assets/youtube.svg"
              alt="youtube"
            />
          </li>
          <li>Audio and Subtitles</li>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>
            <button className="border border-secondary bg-black text-secondary">
              Service Code
            </button>
          </li>
          <li className="listina mt-2">1997-2019 Netflix, Inc. </li>
        </ul>
        <ul className="list-unstyled text-secondary me-5">
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul className="list-unstyled text-secondary me-5">
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul className="list-unstyled text-secondary">
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </footer>
    </>
  );
}

export default FooterComp;
