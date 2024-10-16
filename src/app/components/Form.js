import clsx from 'clsx';
import { subscribeAction } from "../subscribeAction";
import { useFormState } from "react-dom";

const Form = () => {
  const [formState, formAction] = useFormState(subscribeAction, {
    success: false,
    errors: null,
  });

  return (
    <div>
      {!formState.success ? (
        <form
          action={formAction}
          className={clsx(
            'not-prose w-full',
            'space-y-6 mb-16',
            'p-8 rounded border border-solid border-rhubarb',
          )}
          id="register"
        >
          <h2 className="font-bold text-leafyGreen-dark text-3xl text-balance !mt-0">
            Apply to be a <span className='text-kitchensKelly-dark'>content strategy freelancer</span> with Four Kitchens
          </h2>

          <label className="block space-y-2">
            <span className="text-base font-semibold leading-none uppercase">
              Your name
            </span>
            <input
              className="block w-full"
              placeholder=""
              type="text"
              id="name"
              name="name"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-base font-semibold leading-none uppercase">
              Your Email address
            </span>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full"
              placeholder="melissa@example.com"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-base font-semibold leading-none uppercase">
              Qualifications and experience, including portfolio link
            </span>
            <textarea id="links" name="links" rows="3" className="block w-full"></textarea>
          </label>
          
          <label className="block space-y-2">
            <span className="text-base font-semibold leading-none uppercase">
              Fun fact about yourself
            </span>
            <textarea id="funfact" name="funfact" rows="3" className="block w-full"></textarea>
          </label>

          <div className="relative">
            <button
              type="submit"
              className={clsx(
                'inline-block rounded-lg',
                'text-lg font-bold text-white',
                'transition-all',
                'px-8 py-2 uppercase',
                'bg-leafyGreen hover:bg-leafyGreen-dark',
              )}
            >
              Apply
            </button>
          </div>
        </form>
      ) : (
        <div
          className={clsx(
            'not-prose w-full',
            'space-y-6 mb-16',
            'p-8 rounded border border-solid border-rhubarb',
          )}
        >
          <h2 className="font-bold text-leafyGreen-dark text-3xl text-balance !mt-0">
            Thank you for applying!
          </h2>
          <p>You will hear from us in the next business day or so. If you don&apos;t hear from us, reach out to <a href="mailto:randy@fourkitchens.com">randy@fourkitchens.com</a>.</p>
        </div>
      )}
    </div>
  )
}

export default Form;