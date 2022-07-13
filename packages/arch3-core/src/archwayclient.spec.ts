import {ArchwayClient} from './';

describe('archwayClient', () => {
  describe('metadata', () => {
    describe('set', () => {
      it.todo('can set a contract metadata');
    });

    describe('get',  () => {
      test('get client', async () => {
        const client = await ArchwayClient.connect("https://rpc.constantine-1.archway.tech")
        console.log(Object.keys(client))
        console.log(client.queryclient())
      })
      //it.todo('can get a contract metadata');
    });
  });
});
