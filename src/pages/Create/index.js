import './style.scss';

// import CreateTrip from 'src/components/CreateTrip';
import Input from 'src/components/Input';

const Create = () => {
  const handleCreateJourneyName = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h1 className="main-title">Create a new journey</h1>
      <p className="caption">Work in progress</p>

      <form
        className="create__form"
      >
        {/* Name of the journey */}
        <div>
          <p className="create__form__journey-name">Journey name:</p>
        </div>

        <Input
          inputName="journeyName"
          className="create__form__journey-name__input"
        />

        <button
          type="button"
          onClick={handleCreateJourneyName}
        >
          Create
        </button>

      </form>

    </div>
  );
};

export default Create;
