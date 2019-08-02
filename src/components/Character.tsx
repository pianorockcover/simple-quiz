import * as React from "react";
import { SimpleImg } from "react-simple-img";
import { scrollPageTo } from "./helpers";

type Props = CharacterInterface & {
    onRestart: () => void;
};

export class Character extends React.Component<Props> {
    componentDidMount() {
        scrollPageTo({ top: 0 });
    }

    render() {
        const { imageUrl, name, fact, } = this.props;

        const onRestart = () => {
            scrollPageTo({ top: 0 });
            this.props.onRestart();
        }
        
        return (
            <div className="character">
                <div className="image">
                    <SimpleImg src={imageUrl} height={300} />
                </div>
                <div className="text">
                    You are <span>{name}</span>!
            </div>
                <div className="desc">
                    <span>Fun fact:</span> {fact}
                </div>
                <button onClick={onRestart} className="restart">Restart</button>
            </div>
        );
    }
}
