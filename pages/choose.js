import Head from "next/head";
import Link from "next/link";

const choose = () => {
  const username = "SenSeiS";
  return (
    <>
      <Head>
        <title>QuizLab | Choose</title>
        <meta name="description" content="QuizLab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="d-flex flex-column bg-dark justify-content-center align-items-center vh-100 box">
        <div className="p-5 bg-light rounded w-100">
          <h2 className="mb-5 text-danger text-center">QuizLab</h2>
          <div className="row mb-3">
            <div className="col col-6">
              <p className="lead">Sveicināts, {username}!</p>
            </div>
            <div className="col col-6  d-flex justify-content-end">
              {/* Trigger logout */}
              <button className="btn btn-outline-danger btn-sm">
                Atslēgties
              </button>
            </div>
          </div>
          <form action="" method="POST" className="mb-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="invitationCode"
                name="invitationCode"
                placeholder="invitationCode"
              />
              <label for="invitationCode">Uzaicināuma kods</label>
            </div>
            <button className="btn btn-danger w-100">Pievienoties</button>
          </form>
          <Link href="/create">
            <button className="btn btn-danger w-100 mb-3">
              Izveidot viktorīnu
            </button>
          </Link>
          <Link href="/mylist">
            <button className="btn btn-danger w-100">Manas viktorīnas</button>
          </Link>
        </div>
      </body>
    </>
  );
};

export default choose;
