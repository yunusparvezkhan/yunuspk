import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(
        rest.className,
        'flex items-center px-3 py-2 border',
        {
            'border-blue-500 border-none bg-blue-500 hover:bg-blue-600 text-white': primary,
            'border-gray-900 border-none bg-gray-900 hover:bg-gray-800 text-white': secondary,
            'border-green-500 border-none bg-green-500 hover:bg-green-600 text-white': success,
            'border-yellow-400 border-none bg-yellow-400 hover:bg-yellow-500 text-white': warning,
            'border-red-500 border-none bg-red-500 hover:bg-red-600 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-400': outline && warning,
            'text-red-500': outline && danger,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;
