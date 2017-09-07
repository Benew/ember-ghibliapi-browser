import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    let returnValue = this._super(...arguments);
    returnValue.data.map(this.cleanupRelationships.bind(this));
    return returnValue;
  },

  normalizeFindRecordResponse(store, type, payload) {
    let returnValue = this._super(...arguments);
    this.cleanupRelationships(returnValue.data);
    return returnValue;
  },
  /**
   * https://ghibliapi.herokuapp.com serves relationships as array of urls e.g :
   * {
      ...
      "species": [
        "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
      ],
      "locations": [
        "https://ghibliapi.herokuapp.com/locations/"
      ],
      ...
    }
   * For the relationship extraction to work we need to cleanup :
   * - remove all host-related data from the string
   * - leave the id in place
   * - if there is no id (for "locations" in the example), delete the item from the array
   */
  cleanupRelationshipData(relationshipData, index, array){
    relationshipData.id = relationshipData.id.substring(relationshipData.id.lastIndexOf('/') + 1);
    if(!relationshipData.id){
      array.splice(index, 1);
    }
  },
  cleanupRelationships(data){
    Object.keys(data.relationships)
    .forEach((relationshipName) => {
      data.relationships[relationshipName].data.forEach(this.cleanupRelationshipData.bind(this));
      if(!data.relationships[relationshipName].data.length){
        delete data.relationships[relationshipName];
      }
    });
  }
});
