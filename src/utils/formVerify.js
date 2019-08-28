//表单验证
import moment from "moment";

export function disabledEndDate(start_date, current) {
  if (!current) {
    return false;
  }
  if (!start_date) {
    // 如果没有选开始时间, 则可选时间不能大于当前时间
    return current.valueOf() > moment().valueOf();
  }
  // 如果有开始时间，则不能小于开始时间且大于当前时间
  return (
    current.valueOf() <= start_date.valueOf() ||
    current.valueOf() > moment().valueOf()
  );
}

export function disabledStartDate(end_date, current) {
  if (!current) {
    return false;
  }
  if (!end_date) {
    return current.valueOf() > moment().valueOf();
  }
  return (
    current.valueOf() >= end_date.valueOf() ||
    current.valueOf() > moment().valueOf()
  );
}
