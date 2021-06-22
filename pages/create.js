import Head from "next/head";
import Link from "next/link";

const create = () => {
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
          <div className="d-flex justify-content-end mb-3">
            <Link href="/choose">
              <button className="btn btn-outline-danger">Atpakaļ</button>
            </Link>
          </div>
          <form action="" method="POST" className="mb-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="questionOne"
                name="questionOne"
                placeholder="questionOne"
                required
              />
              <label for="questionOne">1. jautājums</label>
            </div>
            <div className="row g-2">
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionOneAnswerOne"
                    name="questionOneAnswerOne"
                    placeholder="questionOneAnswerOne"
                    required
                  />
                  <label for="questionOneAnswerOne">1. Atbilde</label>
                </div>
              </div>
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionOneAnswerTwo"
                    name="questionOneAnswerTwo"
                    placeholder="questionOneAnswerTwo"
                    required
                  />
                  <label for="questionOneAnswerTwo">2. Atbilde</label>
                </div>
              </div>
            </div>
            <div className="row g-2">
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionOneAnswerThree"
                    name="questionOneAnswerThree"
                    placeholder="questionOneAnswerThree"
                  />
                  <label for="questionOneAnswerThree">
                    3. Atbilde (Neobligāti)
                  </label>
                </div>
              </div>
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionOneAnswerFour"
                    name="questionOneAnswerFour"
                    placeholder="questionOneAnswerFour"
                  />
                  <label for="questionOneAnswerFour">
                    4. Atbilde (Neobligāti)
                  </label>
                </div>
              </div>
            </div>
            <select class="form-select">
              <option selected>Atzīmē pareizo atbildi</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <div class="form-floating my-3">
              <input
                type="text"
                class="form-control"
                id="questionTwo"
                name="questionTwo"
                placeholder="questionTwo"
                required
              />
              <label for="questionTwo">2. jautājums</label>
            </div>
            <div className="row g-2">
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionTwoAnswerOne"
                    name="questionTwoAnswerOne"
                    placeholder="questionTwoAnswerOne"
                    required
                  />
                  <label for="questionTwoAnswerOne">1. Atbilde</label>
                </div>
              </div>
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionTwoAnswerTwo"
                    name="questionTwoAnswerTwo"
                    placeholder="questionTwoAnswerTwo"
                    required
                  />
                  <label for="questionTwoAnswerTwo">2. Atbilde</label>
                </div>
              </div>
            </div>
            <div className="row g-2">
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionTwoAnswerThree"
                    name="questionTwoAnswerThree"
                    placeholder="questionTwoAnswerThree"
                  />
                  <label for="questionTwoAnswerThree">
                    3. Atbilde (Neobligāti)
                  </label>
                </div>
              </div>
              <div className="col col-6">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="questionTwoAnswerFour"
                    name="questionTwoAnswerFour"
                    placeholder="questionTwoAnswerFour"
                  />
                  <label for="questionTwoAnswerFour">
                    4. Atbilde (Neobligāti)
                  </label>
                </div>
              </div>
            </div>

            <select class="form-select mb-3">
              <option selected>Atzīmē pareizo atbildi</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <button className="btn btn-success w-100 mb-3">
              Pievienot jautājumu <i className="bi bi-plus"></i>
            </button>
            <button className="btn btn-danger w-100">Izveidot</button>
          </form>
        </div>
      </body>
    </>
  );
};

export default create;
