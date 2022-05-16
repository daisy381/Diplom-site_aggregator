import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
export const InputRange = () => {
  return (
      <Slider trackStyle={{
        backgroundColor: '#2F89CE',
        marginTop: 5
      }} railStyle={{
        backgroundColor: 'rgba(40, 40, 40, 0.5)',
        marginTop: 5
      }} handleStyle={{
        backgroundColor: '#2F89CE',
        color: "#2F89CE",
        padding: 0,
        height: '24px',
        width: '24px',
        opacity: 100,
      }} range allowCross={false} step={1} min={0} max={100}/>
  )
}
