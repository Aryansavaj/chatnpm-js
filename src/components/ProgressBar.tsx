type Props = {
  value: number;
};

export const ProgressBar = (props: Props) => (
  <div class="chat77submodule-progress-bar-container">
    <div
      class="chat77submodule-progress-bar"
      style={{
        width: `${props.value}%`,
      }}
    />
  </div>
);
