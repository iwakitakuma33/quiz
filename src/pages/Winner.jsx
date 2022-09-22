import React from 'react';

import Header from '../partials/Header';
import { useNavigate } from 'react-router-dom';

function Winner() {
  const navigate = useNavigate();

  const gift_url =
    'https://giftto.jp/coupon/msgCard/i6amyb3pxo51b62x8ga744hk967w';

  const handleClick = (e) => {
    window.location.href = gift_url;
  };
  const handleBack = (e) => {
    navigate('/start');
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Winner</h1>
              </div>

              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          正解おめでとう！最後の5の問題はどれを選んでも正解だよ笑
                          GOをタップしたらプレゼントがあるよ！
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <a
                        href={gift_url}
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                      >
                        GO
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        onClick={handleBack}
                        className="btn text-white bg-slate-400 hover:bg-slate-300 w-full"
                      >
                        back
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Winner;
