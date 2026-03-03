import { ListGroup } from "react-bootstrap"
const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]

  export default function ComponentLibraries() {
    return <ListGroup>
        {
            UI_LIBRARY_LIST.map((library, index) => {
                return <ListGroup.Item key={index}>
                    <a href={library.url}>{library.name}</a>
                </ListGroup.Item>
            })
        }
    </ListGroup>
    }