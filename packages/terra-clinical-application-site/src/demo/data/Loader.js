class Loader {
  constructor(data) {
    this.dataKey = data.dataKey;
    this.onRequest = data.onRequest;
    this.onChange = data.onChange;

    this.isLoading = false;
  }

  initiateRequest(requestCallback) {
    this.isLoading = true;

    requestCallback((data) => {
      const stateChange = {};
      stateChange[this.dataKey || 'data'] = data;
      stateChange.isLoading = false;

      this.onChange(stateChange);
    });

    this.onChange({ isLoading: true });
  }

  get() {
    this.initiateRequest(this.onRequest);
  }
}

export default Loader;
