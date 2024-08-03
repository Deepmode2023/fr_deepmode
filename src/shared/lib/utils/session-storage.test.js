import { SessionStorage } from "./session-storage";
import { SESSIONSTORAGE_TOKEN_PK } from "@/shared/config/global";
import { expect } from "@jest/globals";

let localStoreObject = {};

const mockSetItem = jest.fn((key, value) => {
  localStoreObject[key] = value;
});
const mockGetItem = jest.fn((key) => {
  return localStoreObject[key];
});
const mockRemoveItem = jest.fn((key) => {
  delete localStoreObject[key];
});

const mockClear = jest.fn(() => {
  localStoreObject = {};
});

const mockedLocalStorageMethods = {
  setItem: (key, value) => mockSetItem(key, value),
  getItem: (key) => mockGetItem(key),
  removeItem: (key) => mockRemoveItem(key),
  clear: () => mockClear(),
};

Object.defineProperty(window, "localStorage", {
  writable: true,
  configurable: true,
  value: undefined,
});

test("Checking with undefine localStorage", () => {
  expect(() => new SessionStorage()).toThrowError(SessionStorage.getError());
});

describe("Testing SessionStorage: ", () => {
  let storage;
  const testingToken = "Testing:token:19293";

  beforeAll(() => {
    window.localStorage = mockedLocalStorageMethods;
  });

  describe("... & checking getSession method", () => {
    beforeEach(() => {
      storage = new SessionStorage();
    });
    afterEach(() => {
      expect(mockGetItem).toHaveBeenCalled();
      jest.clearAllMocks();
    });
    test("with non-existing key inside store", () => {
      expect(storage.getSession()).toBe(undefined);
    });
    test("with existing key and value inside store", () => {
      storage.setSession(testingToken);
      expect(localStoreObject).toEqual({
        [SESSIONSTORAGE_TOKEN_PK]: testingToken,
      });
      expect(mockSetItem).toHaveBeenCalled();
      expect(storage.getSession()).toBe(testingToken);
    });
  });

  describe("... & checking setSession method", () => {
    afterEach(() => {
      expect(mockSetItem).toHaveBeenCalled();
      jest.clearAllMocks();
    });

    test("trying set up key", () => {
      storage.setSession(testingToken);
      expect(storage.getSession()).toBe(testingToken);
    });
  });
});
