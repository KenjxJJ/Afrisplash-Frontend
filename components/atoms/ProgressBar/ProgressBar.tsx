import PropTypes, { InferProps } from "prop-types";

const ProgressBarComponentProps = {
    value: PropTypes.number
}

const ProgressBarComponent = ({ value = 1 }: InferProps<typeof ProgressBarComponentProps>) => {
    let levelInPercentage = `${value?.toLocaleString()}%`;
    return (
        <>
            <div className="w-100 h-4 bg-green-100 border-grey-500 rounded-full my-1 overflow-hidden">
                <div className="bg-primary_green rounded-inherit h-4" style={{ width: levelInPercentage }}></div>
            </div>
        </>
    )
}


export default ProgressBarComponent;