import "./ProgressBar.css"

export default function ProgressBar({ progress, color = 'blue', height = '16px', children }) {
    const progressStyle = {
        width: `${progress}%`,
        backgroundColor: color,
        height: height,
    }
    return (
        <div style={{ paddingTop: "0px", paddingBottom: "0px" }} className="progress-bar-container">
            <div className="progress-bar" style={progressStyle}></div>
        </div>
    );
}