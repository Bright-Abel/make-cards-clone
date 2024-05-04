const PinInput = () => {
  return (
    <Wrapper>
      <PinInput
        className="pin-input-container"
        length={4}
        initialValue=""
        placeholder="."
        secret
        secretDelay={100}
        onChange={(value, index) => {}}
        type="numeric"
        inputMode="number"
        style={{ padding: '10px' }}
        inputStyle={{
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderColor: '#d1d5db',
          width: '3.5rem',
        }}
        inputFocusStyle={{ borderColor: '#14b8a6' }}
        onComplete={(value, index) => {}}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      />
    </Wrapper>
  );
};
export default PinInput;
