const NavigationButtons = ({
  currentStep,
  goToNextStep,
  goToPreviousStep,
  isNextDisabled,
}) => {
  return (
    <div className="mt-6 flex justify-between">
      {currentStep > 0 && (
        <button
          onClick={goToPreviousStep}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-4"
        >
          Back
        </button>
      )}

      {currentStep < 3 && (
        <button
          onClick={goToNextStep}
          type="button"
          className={`py-2 px-4 rounded ${
            isNextDisabled
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={isNextDisabled}
        >
          Next
        </button>
      )}

      {currentStep === 3 && <button className="hidden"></button>}
    </div>
  );
};

export default NavigationButtons;
