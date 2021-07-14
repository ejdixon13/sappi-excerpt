// import { t, Trans } from '@lingui/macro';
import 'antd/dist/antd.css';
import { Space } from 'antd';
import { some } from 'lodash';
import * as React from 'react';
import { UseFormMethods } from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import InputLabel from '../../components/InputLabel';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import styles from './SearchForm.module.scss';

interface ISearchFormProps {
  register: UseFormMethods['register'];
  formState: UseFormMethods['formState'];
  getValues: UseFormMethods['getValues'];
  trigger: UseFormMethods['trigger'];
  onSubmit: () => void;
  onReset: () => void;
  isWidget: boolean;
}

const SearchForm: React.FunctionComponent<ISearchFormProps> = ({
  register,
  formState,
  getValues,
  trigger,
  onReset,
  onSubmit,
  isWidget
}) => {
  const oneInputFilled = () => some(getValues(), value => !!value);
  const { isValid } = formState;
  const FORM = (
    <form className="p-4" onSubmit={onSubmit}>
      <Space direction="vertical" size="large" className="w-full">
        <InputLabel
          text={`Pallet Number`}
          position="side"
          size="lg"
          labelClassName={styles.label}
        >
          <Input
            ref={register({ validate: oneInputFilled })}
            name="pallet"
            onChange={() => trigger()}
            width="50"
          />
        </InputLabel>
        <InputLabel
          text={
            <>
              <span className="font-normal text-base">or&nbsp;</span>
              Roll Number
            </>
          }
          position="side"
          size="lg"
          labelClassName={styles.label}
        >
          <Input
            ref={register({ validate: oneInputFilled })}
            name="reel"
            width="50"
            onChange={() => trigger()}
          />
        </InputLabel>
        <InputLabel
          text={
            <>
              <span className="font-normal text-base w-7">or&nbsp;</span>
              Mill Order Number
            </>
          }
          position="side"
          size="lg"
          labelClassName={styles.label}
        >
          <Input
            ref={register({ validate: oneInputFilled })}
            name="mics"
            width="50"
            onChange={() => trigger()}
          />
        </InputLabel>
        <Space size="middle">
          <Button theme="primary" type="submit" disabled={!isValid}>
            Submit
          </Button>
          <Button
            theme="link"
            className="text-lg font-bold"
            type="reset"
            onClick={onReset}
          >
            Reset
          </Button>
        </Space>
      </Space>
    </form>
  );
  return (
    <>
      {isWidget ? (
        FORM
      ) : (
        <SimpleCard borderColor="green-citrus" style={{ width: '425px' }}>
          {FORM}
        </SimpleCard>
      )}
    </>
  );
};

export default SearchForm;
