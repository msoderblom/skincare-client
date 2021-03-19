import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
// import * as S from "./styled";
import { Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectInput = ({
  options = [],
  label,
  name,
  control,
  defaultValue,
  ...props
}) => {
  const classes = useStyles();
  const labelId = `${name}-label`;
  return (
    <FormControl variant="outlined" className={classes.formControl} {...props}>
      <InputLabel id="demo-simple-select-outlined-label">
        {label && label}
      </InputLabel>

      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {options.length > 0 &&
              options.map((option) => (
                <MenuItem value={option.value}>{option.text}</MenuItem>
              ))}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

export default SelectInput;
