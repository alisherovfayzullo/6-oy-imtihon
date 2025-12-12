export default function Footer() {
  return (
    <footer className=" bg-base-200 text-base-content p-10 mt-5">
      <div className="footer mx-auto flex justify-between">
        <div>
          <h2 className="text-xl font-bold">AFX</h2>
          <p className="opacity-70">
            Alisherov Fayzullo
            <br /> © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          </p>
        </div>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">UI/UX Design</a>
          <a className="link link-hover">Mobile Apps</a>
          <a className="link link-hover">Hosting</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
}
