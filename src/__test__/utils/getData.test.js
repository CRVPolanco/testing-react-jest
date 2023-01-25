import getData from "../../utils/getData";


describe('fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('call api and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((r) => {
        expect(r.data).toEqual('12345');
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  })
});
