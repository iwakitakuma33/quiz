import React from 'react';

import Header from '../partials/Header';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();

  const items_qz1 = ['愛媛県', '奈良県', '熊本県'];
  const items_qz2 = ['沖縄県', '大阪府', '香川県'];
  const items_qz3 = ['千葉県', '東京都', '神奈川県'];
  const items_qz4 = ['面白い恋人', '赤い恋人', '白い恋人'];
  const items_qz5 = ['パーソナリティ', '声', 'スタイル'];

  const [val_qz1, setVal_qz1] = React.useState();
  const [val_qz2, setVal_qz2] = React.useState();
  const [val_qz3, setVal_qz3] = React.useState();
  const [val_qz4, setVal_qz4] = React.useState();
  const [val_qz5, setVal_qz5] = React.useState();
  const handleChange_qz1 = (e) => {
    setVal_qz1(e.target.value);
  };
  const handleChange_qz2 = (e) => {
    setVal_qz2(e.target.value);
  };
  const handleChange_qz3 = (e) => {
    setVal_qz3(e.target.value);
  };
  const handleChange_qz4 = (e) => {
    setVal_qz4(e.target.value);
  };
  const handleChange_qz5 = (e) => {
    setVal_qz5(e.target.value);
  };
  const isNonVals = () => {
    let result = false;
    if (
      val_qz1 != undefined &&
      val_qz2 != undefined &&
      val_qz3 != undefined &&
      val_qz4 != undefined &&
      val_qz5 != undefined
    ) {
      result = true;
    }
    return result;
  };
  const isOKVals = () => {
    let result = false;
    if (
      val_qz1 == '奈良県' &&
      val_qz2 == '香川県' &&
      val_qz3 == '千葉県' &&
      val_qz4 == '白い恋人'
    ) {
      result = true;
    }
    return result;
  };
  const handleClick = (e) => {
    e.preventDefault();
    let result_undefined = isNonVals();
    let result_Ok = isOKVals();
    if (result_undefined && result_Ok) {
      navigate('/winner');
    } else {
      alert('どこかが違うよー笑');
    }
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">5つ選んだらcheck</h1>
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
                          1.海が無い都道府県はどれ？
                        </label>
                      </div>
                      <div className="flex justify-between">
                        {items_qz1.map((item) => {
                          return (
                            <div key={item}>
                              <input
                                id={item}
                                type="radio"
                                value={item}
                                onChange={handleChange_qz1}
                                checked={item === val_qz1}
                                name="qz1"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor={item}
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                <span className="ml-2">{item}</span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          2.面積が都道府県はどれ？
                        </label>
                      </div>
                      <div className="flex justify-between">
                        {items_qz2.map((item) => {
                          return (
                            <label
                              key={item}
                              htmlFor={item}
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <input
                                id={item}
                                type="radio"
                                value={item}
                                onChange={handleChange_qz2}
                                checked={item === val_qz2}
                                name="qz2"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <span className="ml-2">{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          3.TokyoDisneyLandはどこにある？
                        </label>
                      </div>
                      <div className="flex justify-between">
                        {items_qz3.map((item) => {
                          return (
                            <label
                              key={item}
                              htmlFor={item}
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <input
                                id={item}
                                type="radio"
                                value={item}
                                onChange={handleChange_qz3}
                                checked={item === val_qz3}
                                name="qz3"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <span className="ml-2">{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          4.北海道のお見上げといえば？
                        </label>
                      </div>
                      <div className="flex justify-between">
                        {items_qz4.map((item) => {
                          return (
                            <label
                              key={item}
                              htmlFor={item}
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <input
                                id={item}
                                type="radio"
                                value={item}
                                onChange={handleChange_qz4}
                                checked={item === val_qz4}
                                name="qz4"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <span className="ml-2">{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          5.僕が思うあなたの魅力はどれ？
                        </label>
                      </div>
                      <div className="flex justify-between">
                        {items_qz5.map((item) => {
                          return (
                            <label
                              key={item}
                              htmlFor={item}
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <input
                                id={item}
                                type="radio"
                                value={item}
                                onChange={handleChange_qz5}
                                checked={item === val_qz5}
                                name="qz5"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <span className="ml-2">{item}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        onClick={handleClick}
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                      >
                        Check
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

export default Start;
