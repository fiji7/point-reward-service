import './ErrorMessage.css';

export const ErrorMessage = () =>
    <div className="error-container">
        <span>{`Sorry, we apologize that we were unable to provide you with the requested data at this time.
     It seems that there was an unexpected issue that prevented us from retrieving the information you were looking for.
      Our team is already working hard to resolve the issue and we appreciate your patience in the meantime.
       Please feel free to contact us if you have any further questions or concerns.`}
        </span>
    </div>;
