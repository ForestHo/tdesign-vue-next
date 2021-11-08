import { defineComponent } from 'vue';
import { prefix } from '../../config';
import props from './cell-props';

const name = `${prefix}-date-picker-cell`;

export default defineComponent({
  props,
  render() {
    const {
      text,
      value,
      active,
      highlight,
      disabled,
      startOfRange,
      endOfRange,
      additional,
      now,
      firstDayOfMonth,
      lastDayOfMonth,
      onClick,
      onMouseEnter,
    } = this;
    const cellClass = [
      name,
      {
        [`${prefix}-date-cell--now`]: now,
        [`${prefix}-date-cell--active`]: active,
        [`${prefix}-date-cell--disabled`]: disabled,
        [`${prefix}-date-cell--highlight`]: highlight,
        [`${prefix}-date-cell--active-start`]: startOfRange,
        [`${prefix}-date-cell--active-end`]: endOfRange,
        [`${prefix}-date-cell--additional`]: additional,
        [`${prefix}-date-cell--first-day-of-month`]: firstDayOfMonth,
        [`${prefix}-date-cell--last-day-of-month`]: lastDayOfMonth,
      },
    ];

    return (
      <td class={cellClass}>
        <div
          class={`${prefix}-date-cell__wrapper`}
          onClick={(e: MouseEvent) => {
            if (!disabled) {
              onClick(value, { e });
            }
          }}
          onMouseenter={() => onMouseEnter && onMouseEnter(value)}
        >
          <span class={`${prefix}-date-cell__text`}>{text}</span>
        </div>
      </td>
    );
  },
});