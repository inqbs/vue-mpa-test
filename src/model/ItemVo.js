export default class ItemVo {

  idx;
  type;
  thumb;
  thumbText;
  title;
  description;
  tag = [];
  link;
  linkText;
  price = 0;
  orgPrice = 0;

  #data;

  //  data: param Object
  constructor(data) {
    Object.keys(data).forEach(key => {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    })
    this.#data = data;
  }

}
