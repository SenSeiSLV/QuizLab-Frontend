import Head from "next/head";
import Link from "next/link";

const index = () => {
  const time = 12;
  const question = "Kura ir Latvijas galvaspilsēta?";
  const questionId = 2;
  const remainingQuestions = 10;
  const isLive = false;
  const isAdmin = true;
  const hasJoined = 10;
  const quizTitle = "Latvija";
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
          <div className="row">
            <div className="col col-12 text-center">
              <p className="lead fw-bold">Viktorīna "{quizTitle}"</p>
            </div>
          </div>
          {isLive == true ? (
            <>
              <div className="row mb-3">
                <div className="col col-12">
                  <p>
                    {questionId}. jautājums no {remainingQuestions}.
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col col-6">
                  <p className="lead fw-bold">{question}</p>
                </div>
                <div className="col col-6 d-flex justify-content-end">
                  <p className="lead fw-bold">{time} sekundes</p>
                </div>
              </div>
              <form action="" method="POST" className="mb-3">
                <div className="row mb-3">
                  <div className="col col-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        Rīga
                      </label>
                    </div>
                  </div>
                  <div className="col col-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Liepāja
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col col-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        Jelgava
                      </label>
                    </div>
                  </div>
                  <div className="col col-6">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Daugavpils
                      </label>
                    </div>
                  </div>
                </div>

                <button className="btn btn-danger w-100">Atbildēt</button>
              </form>
            </>
          ) : isAdmin == true ? (
            <>
              <p className="lead fw-bold text-center">
                {hasJoined} cilvēki ir pievienojušies.
              </p>
              <button className="btn btn-success w-100 mb-3">Sākt</button>
              <Link href="../create">
                <button className="btn btn-warning w-100">Labot</button>
              </Link>
            </>
          ) : (
            <>
              <p className="lead fw-bold text-center">
                Gadi, drīz viktorīna sāksies!
              </p>
              <Link href="/choose">
                <button className="btn btn-danger w-100">Iziet</button>
              </Link>
            </>
          )}
        </div>
      </body>
    </>
  );
};

export default index;
