// import classnames from 'classnames';
// import styles from './index.module.css'

export type ButtonProps = {
  /**
   * ボタンのラベル
   */
  label: string
  /**
   * クリックイベント
   */
  onClick: () => void
}

export const Button = ({ onClick, label }: ButtonProps): JSX.Element => {
  return (
    <button
      className="font-bold border-0 rounded-lg cursor-pointer inline-block leading-none bg-blue-500 text-white p-4"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
