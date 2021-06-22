import Head from "next/head";
import Link from "next/link";

const mylist = () => {
  const quizTitle = "Latvija"; // for test
  const haveQuiz = true;
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
            <div className="col col-12  d-flex justify-content-end">
              {/* Trigger logout */}
              <button className="btn btn-outline-danger btn-sm">
                Atslēgties
              </button>
            </div>
          </div>
          {haveQuiz == true ? (
            <>
              <div className="row mb-3">
                <div className="col col-6 d-flex align-items-center justify-content-between border border-secondary border-1 p-2">
                  <p className="lead fw-bold m-0">{quizTitle}</p>
                  <button className="btn btn-warning">Labot</button>
                </div>
                <div className="col col-6 d-flex align-items-center justify-content-between border border-secondary border-1 p-2">
                  <p className="lead fw-bold m-0">{quizTitle}</p>
                  <button className="btn btn-warning">Labot</button>
                </div>
              </div>
            </>
          ) : (
            <> </>
          )}

          <Link href="/create">
            <button className="btn btn-danger w-100 mb-3">
              Izveidot Jaunu
            </button>
          </Link>
          <Link href="/choose">
            <button className="btn btn-danger w-100">Atpakaļ</button>
          </Link>
        </div>
      </body>
    </>
  );
};

export default mylist;
