import React from 'react';
import Badge from "react-bootstrap/Badge";
const marked = require("marked");


export default class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    markdown: `# Headings 
# h1
## h2
### h3 
<br> **bold text** and *italicized text*. 
> This is a blockquote
---
<br>

1. First item 
2. Second item 
3. Third item <br>

[There is a link to my Github](https://github.com/Esemega/)

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

<br>

~~The world is flat.~~

<br>

### TODO
- [x] Visit my Github page
- [ ] Share this proyect with your friends
- [ ] Contact me `,
  };
}

updateMarkdown(markdown) {
  this.setState({ markdown });
}

render(){

  var inputStyle = {
    width: "550px",
    height: "70vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    borderRadius:"2px 2px 4px 4px",
    boxShadow: "1px"
  };

  var outputStyle = {
    width: "550px",
    height: "70vh",
    backgroundColor: "#f1f1f1",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    overflow: "auto",
    borderRadius:"2px 2px 4px 4px",
    boxShadow: "1px"
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
            <Badge className="text-align-center" variant="light">
                Markdown Previewer
            </Badge>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                </Badge>
              </h4>
            </div>
            <div className="mark-input" style={inputStyle}>
              <textarea 
              className="input"
              style={inputStyle}
              value={this.state.markdown}
              onChange={(e) => {
                this.updateMarkdown(e.target.value);
              }}
              >
              </textarea>
            </div>
          </div>

          <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div style={inputStyle}>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );}
}

