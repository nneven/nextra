const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <a href="/">About</a>
      <a href="/projects">Projects</a>
      <span>
        <time>{YEAR}</time> © Nicolas Neven.
      </span>
      <style jsx>{`
        a {
          margin-right: 1rem;
        }
        span {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  readMore: 'Read More →',
  darkMode: true,
}
