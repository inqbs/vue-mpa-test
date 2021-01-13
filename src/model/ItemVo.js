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
    Object.keys(data).forEach(key=>{
      if(this.hasOwnProperty(key)){
        this[key] = data[key]
      }
    })
    this.#data = data;
  }

}

/* {
 type: 4,
 thumb: '/images/sample_2.jpg',
 thumbText: 'test2',
 title: 'test',
 description: 'test입니다2.',
 tag: ['test', 'test2'],
 link: '',
 linkText: '링크',
 price: 2000,
 orgPrice: 3000
}, */
