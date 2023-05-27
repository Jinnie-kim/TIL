{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // function printLoginState(state: ResourceLoadState) {
  //   if (state.state === 'loading') return console.log(`👀 ${state.state}...`);
  //   if (state.state === 'success') return console.log(`😃 ${state.response.body}`);
  //   if (state.state === 'fail') return console.log(`😱 ${state.reason}`);
  // }

  // switch 문으로 변경
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknow state: ${state}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
