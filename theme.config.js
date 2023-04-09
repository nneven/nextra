const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <span>
        <a href="/">About</a>
        <a href="/projects">Projects</a>
      </span>
      <time>{YEAR} © Nicolas Neven.</time>
      <style jsx>{`
        a {
          float: left;
          margin-right: 1rem;
        }
        time {
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
  )
}
