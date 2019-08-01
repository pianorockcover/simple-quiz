import * as React from "react";
import { SimpleImg } from "react-simple-img";

type Props = CharacterInterface & {
    onRestart: () => void;
};

export const Character = (props: Props) => (
    <div className="character">
        <div className="image">
            <SimpleImg src={props.imageUrl} height={300} />
        </div>
        <div className="text">
            You are <span>{props.name}</span>!
        </div>
        <button onClick={props.onRestart} className="restart">Restart</button>
    </div>
);
