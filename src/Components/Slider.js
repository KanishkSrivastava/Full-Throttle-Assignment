import React from 'react';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Handle = Slider.Handle;
const handle = ({ value, dragging, index, ...restProps }) => (
  <Tooltip prefixCls='rc-slider-tooltip' overlay={value} visible={dragging} placement='top' key={index}>
    <Handle value={value} {...restProps} />
  </Tooltip>
);

const SliderComponent = ({ min, max, onChange }) => <Slider min={min} max={max} defaultValue={min} handle={handle} onAfterChange={onChange} />;

export default SliderComponent;
