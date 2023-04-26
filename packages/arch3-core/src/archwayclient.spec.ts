
import { ArchwayClient } from './archwayclient';

const wasmd = {
  blockTime: 6_000, // ms
  chainId: "local-1",
  endpoint: "http://localhost:26657",
  prefix: "archway1",
  denom: "uarch",
};

describe('ArchwayClient', () => {
  describe("connect", () => {
    it("can be constructed", async () => {
      const client = await ArchwayClient.connect(wasmd.endpoint);
      expect(client).toBeTruthy();
      client.disconnect();
    });
  });
});
