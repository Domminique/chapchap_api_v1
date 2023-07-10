import { BSON } from 'realm';

class Item extends Realm.Object {
  _id;
  isComplete;
  summary;
  owner_id;
  avatar_url;

  static schema = {
    name: 'Item',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      isComplete: { type: 'bool', default: false },
      summary: 'string',
      owner_id: 'string',
      // avatar_url: 'string?',
    },
  };
}

export { Item };
