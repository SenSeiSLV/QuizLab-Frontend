import Head from "next/head";
import Link from "next/link";

const register = () => {
  const error = "Lietotājvārds aizņēmts!";
  return (
    <>
      <Head>
        <title>QuizLab | Login</title>
        <meta name="description" content="QuizLab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="d-flex flex-column bg-dark justify-content-center align-items-center vh-100 box">
        <div className="p-5 bg-light rounded w-100">
          <h2 className="mb-5 text-danger text-center">QuizLab</h2>
          {/* Error reģistrāciajs laikā */}
          <div className="alert alert-danger d-flex align-items-center justify-content-center">
            <div>{error}</div>
          </div>

          <form action="" method="POST">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Lieotājvārds"
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity("Ievadi lietotājvārdu!");
                }}
                onChange={(e) => {
                  e.target.setCustomValidity("");
                }}
              />
              <label for="username">Lieotājvārds</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="E-pasts"
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity("Ievadi derīgu e-pasta adresi!");
                }}
                onChange={(e) => {
                  e.target.setCustomValidity("");
                }}
              />
              <label for="email">E-pasts</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Parole"
                required
                minLength="8"
                onInvalid={(e) => {
                  e.target.setCustomValidity("Ievadi paroli!");
                }}
                onChange={(e) => {
                  e.target.setCustomValidity("");
                }}
              />
              <label for="password">Parole (min. 8 simboli)</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="comfirmPassword"
                placeholder="Apstiprini Paroli"
                required
              />
              <label for="comfirmPassword">Apstiprini Paroli</label>
            </div>
            <button className="btn btn-danger btn-lg w-100">
              Reģistrēties
            </button>
          </form>
          <div className="mt-3">
            <h5 className="text-center">Esi reģistrējies?</h5>
            <Link href="/">
              <button className="btn btn-danger w-100">Ienākt</button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};

export default register;
