/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, id, children, classes) {
    // Tag name of the node.
    this.tag = tag;
    // ID of the node
    this.id = id;
    // Array of child nodes.
    this.children = children; // All children are of type Node
    // Array of CSS class names (string) on this element.
    this.classes = classes;
  }
  
  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  *
  * 3.
  * <div> 
  *   <span id="span-1" class="note></span>
  *   <span id="span-2"></span>
  *   <span id="span-3"></span>
  *   <article>
  *     <div>
  *       <span id="span-3"></span>
  *     </div>
  *   </article>
  * </div>
  * Selector `.note ~ span` should return two span nodes.
  * span-1 -> span-2.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */
 
  search(selector) {
    if(parent == 0){
      parent = 1;
      parentNode = this.id;
    }
    for(let i = 0; i < this.children.length; i++){
      first = 1;
      // search function is called recursively for all the children of the parent element
      this.children[i].search(selector);
    }

    if(first == 1 && this.id != parentNode){
      // checks for matching ids
      if(this.tag == selector){
        resArray.push(this);
      }
      else{
        if(this.id != parentNode){
          // checks for matching class names
          for(let j = 0; j < this.classes.length; j++){
            let temp = selector.replace('.','');
            if(this.classes[j].includes(temp)){
              resArray.push(this.id);
            }
          }
        }
      }
    }
    return resArray;
  }
}

/* DOM -
<body id="content">
  <div id="div-1" class="mainContainer">
    <span id="span-1" class="note"></span>
    <span id="span-2"></span>
    <div id="div-2" class="subContainer1">
      <p id="para-1" class="sub1-p1 note"></p>
        <span id="span-3" class="sub1-span3"></span>
    </div>
    <div id="div-3" class="subContainer2">
      <section id="sec-1">
        <label id="lbl-1"></label>
      </section>
    </div>
    <div id="div-4">
      <span id="span-4" class="mania"></span>
      <span id="span-5" class="note mania"></span>
    </div>
  </div>
  <span id="span-6" class="randomSpan"></span>
</body>
*/

/* creating DOM tree using Node class
   constructor(tag, id, children, classes) */

// spans - 4 
let spanNode1 = new Node('span', 'span-1', [], ['note']);
let spanNode2 = new Node('span', 'span-2', [], []);
let spanNode3 = new Node('span', 'span-3', [], ['sub1-span3']);
let spanNode4 = new Node('span', 'span-4', [], ['mania']);
let spanNode5 = new Node('span', 'span-5', [], ['note', 'mania']);
let randomNode = new Node('span', 'span-6', [], ['randomSpan']);

// p - 1
let p1 = new Node('p', 'para-1', [], ['sub1-p1', 'para-1', 'note']);

// label - 1 
let label1 = new Node('label', 'lbl-1', [], []);

// section - 1
let section1 = new Node('section', 'sec-1', [label1], []);

// div - 4
let divNode4 = new Node('div', 'div-4', [spanNode4, spanNode5], []);
let divNode3 = new Node('div', 'div-3', [section1], ['subContainer2']);
let divNode2 = new Node('div', 'div-2', [p1, spanNode3], ['subContainer1']);
let divNode1 = new Node('div', 'div-1', [spanNode1, spanNode2, divNode2, divNode3, divNode4], ['mainContainer']);

// body
let body = new Node('body', 'content', [divNode1, randomNode], ['root']);

let first = 0;
let parentNode = 'root';
let parent = 0;
let resArray = [];

try{

  // Testing
  console.log('Started...');
  
  // Test case 1 - search for span tag under divNode1
  console.log(divNode1.search('span'));
  // OUTPUT - [ 'span-1', 'span-2', 'span-3', 'span-4', 'span-5' ]
  
  // Test case 2 - search for .note class under divNode1
  // console.log(divNode1.search('.note'));
  // OUTPUT - [ 'span-1', 'para-1', 'span-5' ]
  
  // Test case 3 - search for label tag under divNode1
  // console.log(divNode1.search('label'));
  // OUTPUT - [ 'lbl-1' ]

  // Test case 4 - search for .note class under in p1
  // console.log(p1.search('.note'));
  // OUTPUT - []

  // Test case 5 - search for div tag under divNode1
  // console.log(divNode1.search('div'));
  // OUTPUT - [ 'div-2', 'div-3', 'div-4' ]

  // Test case 6 - search for div tag under randomNode
  // console.log(randomNode.search('div'));
  // OUTPUT - []

  // Test case 7 - searching for section tag under divNode2
  // console.log(divNode2.search('section'));
  // OUTPUT - []

  // Test case 8 - search with invalid (black) input
  // console.log(body.search());
  // OUTPUT - Invalid Input

  // Test case 9 - searche for section tag under body
  // console.log(body.search('section'));
  // OUTPUT - [ 'sec-1' ]

  // Test case 10 - searches for random node under divNode1
  // console.log(divNode1.search('.randomSpan'));
  // OUTPUT - []

}

  // Exception handling
  catch(exception){
    console.log('INVALID INPUT!!!');
  }